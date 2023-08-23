import fetch from 'node-fetch';

const url = "https://api.github.com/users";

export class UserService {

    getAllUsers = async (since: string) => {
        const users = `${url}?since=${since}`;
        try {
            const res = await fetch(users);
            const data = await res.json();
            return data;
        }
        catch(err) {
            console.log(err)
            throw err;
        }
        
    }
    
    getUserDetailsByUsername = async (username: string) => {
        const users = `${url}/${username}`;
        try {
            const res = await fetch(users);
            const data = await res.json();
            return data;
        }
        catch(err) {
            console.log(err)
            throw err;
        }
        
    }
    
    getUserReposByUsername = async (username: string) => {
        const users = `${url}/${username}/repos`;
        try {
            const res = await fetch(users);
            const data = await res.json();
            return data;
        }
        catch(err) {
            console.log(err)
            throw err;
        }
        
    }


}