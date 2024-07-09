import { test, expect } from '@playwright/test';

test("API test 1", async ({request})=>{
    const response = await request.get('https://dummyjson.com/products/1');

    expect(response).toBeOK();
})