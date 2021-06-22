import axios from 'axios';
import {getRepoDetails} from "./gitRepoService";

jest.mock('axios');
describe('GitRepoServiceTest', () => {
    it('should return transformed data on getting all the api responses', async () => {
        const data = {
            data: {
                "total_count": 1,
                "incomplete_results": false,
                "items": [
                    {
                        "id": 222138978,
                        "name": "abheepsa-academy-api",
                        "full_name": "tiwariankitorg/abheepsa-academy-api",
                        "private": false,
                        "owner": {
                            "login": "tiwariankitorg",
                            "id": 57842357, "node_id": "MDEyOk9yZ2FuaXphdGlvbjU3ODQyMzU3",
                            "avatar_url": "https://avatars.githubusercontent.com/u/57842357?v=4",
                        },
                        "html_url": "https://github.com/tiwariankitorg/abheepsa-academy-api",
                        "description": "Not in use",
                        "fork": false,
                        "license": {
                            "key": 'key'
                        },
                        "forks": 0,
                        "open_issues": 0,
                        "watchers": 0,
                    }
                ]
            }
        };
        const expectedData = {
            "repos": [{
                "description": "Not in use",
                "forks": 0,
                "licenseKey": "key",
                "name": "abheepsa-academy-api",
                "ownerAvatar": "https://avatars.githubusercontent.com/u/57842357?v=4",
                "watchers": 0
            },], "total": 1
        }

        const props = {
            loadSuccess: jest.fn(),
            loadError: jest.fn(),
            loadReposMoreSuccess: jest.fn(),
        }

        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await getRepoDetails('abheepsa', props);

        expect(axios.get).toHaveBeenCalledWith(
            `https://api.github.com/search/repositories?q=abheepsa&page=1`,
        );
        expect(props.loadSuccess).toHaveBeenCalledWith(expectedData);
    });

    it('should return error on network failure', async () => {
        const props = {
            loadSuccess: jest.fn(),
            loadError: jest.fn(),
        }

        axios.get.mockImplementationOnce(() => Promise.reject('error'));
        await getRepoDetails('country', props);

        expect(axios.get).toHaveBeenCalledWith(
            `https://api.github.com/search/repositories?q=country&page=1`,
        );
        expect(props.loadError).toHaveBeenCalled();
    });
})