export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    tourPath: string
    locale: string
    enableMock: boolean
}

export const appConfig: AppConfig = {
//s    apiPrefix: `${process.env.REACT_APP_BASE_URL}/api`,
    apiPrefix: 'http://172.17.9.165:3500',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    tourPath: '/',
    locale: 'en',
    enableMock: false,
}

export default appConfig
