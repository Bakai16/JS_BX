"https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}";

class Github {
    constructor() {
        this.client_id = "dd17b25e7ebb42dc40c5 ";
        this.client_secret = "cf397bc9a91d1a4bd75ed86d91b9ae18819b4230";
    }


    async getUser(user) {
        const profileResponce = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const profile = await profileResponce.json();

        return {
            profile: profile,
        };
    }

}