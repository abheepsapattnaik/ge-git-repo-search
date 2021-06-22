import repoReducer, {loadReposError, loadReposMore, loadReposSuccess, updateSearchKeyword} from "./repoReducer";


describe('RepoReducer', () => {
    describe('initial action', () => {
        it('should return initial state when the action is undefined', () => {
            const state = repoReducer(undefined, 'INITIAL STATE');
            expect(state).toEqual({
                error: false,
                initialLoading: false,
                repos: [],
                searchInput: '',
            });
        });
    });
    describe('loadRepoSuccessAction', () => {
        it('should make loading true', () => {
            const state = {
                error: false,
                initialLoading: true,
                repos: [],
                searchInput: ''
            };
            const newState = repoReducer(state, loadReposSuccess(
                {repos: [{key: 'trial'}]},
            ));
            expect(newState).toEqual({
                error: false,
                initialLoading: false,
                total: undefined,
                searchInput: '',
                repos: [{key: 'trial'}]
            })
        });
    });
    describe('loadRepoMoreAction', () => {
        it('should load next set of repo details', () => {
            const state = {
                error: false,
                initialLoading: true,
                repos: [{key: 'trial'}],
                searchInput: ''
            };
            const newState = repoReducer(state, loadReposMore(
                {repos: [{key1: 'trial1'}]},
            ));
            expect(newState).toEqual({
                error: false,
                initialLoading: true,
                total: undefined,
                searchInput: '',
                repos: [{key: 'trial'}, {key1: 'trial1'}]
            })
        });
    });
    describe('loadRepoErrorAction', () => {
        it('should load error state if api fails', () => {
            const state = {
                error: false,
                initialLoading: true,
                repos: [{key: 'trial'}],
                searchInput: '',
                total: 1,
            };
            const newState = repoReducer(state, loadReposError());
            expect(newState).toEqual({
                error: true,
                initialLoading: false,
                total: 1,
                searchInput: '',
                repos: [{key: 'trial'},]
            })
        });
    });
    describe('updateSearchKeywordAction', () => {
        it('should update search input', () => {
            const state = {
                error: false,
                initialLoading: false,
                repos: [{key: 'trial'}],
                searchInput: '',
                total: 1,
            };
            const newState = repoReducer(state, updateSearchKeyword('searched'));
            expect(newState).toEqual({
                error: false,
                initialLoading: true,
                total: 1,
                searchInput: 'searched',
                repos: []
            })
        });
    });

});