import axios from 'axios';

const githubApiBaseUrl = "https://api.github.com/users";

export class UserService {

    getAllUsers = async (since: string) => {
        const url = `${githubApiBaseUrl}?since=${since}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
    getUserDetailsByUsername = async (username: string) => {
        const url = `${githubApiBaseUrl}/${username}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
    getUserReposByUsername = async (username: string) => {
        const url = `${githubApiBaseUrl}/${username}/repos`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
