[back-end]
    Create an API that will proxy all client requests to the appropriate
    GitHub endpoint. The following endpoints must be provided:
        
        URL - https://api.github.com/users/

        GET - /api/users?since={number}
        This endpoint must return a list of GitHub users and the link for
        the next page.

        GET - /api/users/:username/details
        This endpoint must return the details of a GitHub user

        GET - /api/users/:username/repos
        This endpoint must return a list with all user repositories


    [full-stack (optional)] [back-end]
    Create tests for your application covering all endpoints.