import { Page, Locator } from '@playwright/test';

export class ApiNetworkPage {
    readonly page: Page;
    readonly apiPageHeader: Locator;
    readonly userList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.apiPageHeader = page.locator('.card h2');
        this.userList = page.locator('#users-list'); // Assuming there's a user list element on the page
    }

    async  navigateToApiNetworkPage(pageNumber: number) {
        await this.page.goto(`/api-network/exercise-${pageNumber}`);
    }

    async postUserData(username: string, email: string) {
        const response = await this.page.request.post('/api/users', {
            data: {
                name: username,
                email: email
            }
        });
        return response;
    }

    async getUserData() {
        const response = await this.page.request.get(`/api/users/`);
        return response;
    }
    
}   