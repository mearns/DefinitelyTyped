// Type definitions for aws4 1.5.0
// Project: https://github.com/mhart/aws4
// Definitions by: Andrew Crites <https://github.com/ajcrites>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class RequestSigner {
    constructor(request?: any, credentials?: any);
    request: any;
    credentials: any;
    service: any;
    region: any;
    isCodeCommitGit: any;

    matchHost(host?: string): string[];
    isSingleRegion(): boolean;
    createHost(): string;
    prepareRequest(): void;
    sign(): any;
    getDateTime(): string;
    getDate(): string;
    authHeader(): string;
    signature(): string;
    stringToSign(): string;
    canonicalString(): string;
    canonicalHeaders(): string;
    signedHeaders(): string;
    credentialString(): string;
    defaultCredentials(): any;
    parsePath(): any;
    formatPath(): string;
}

type Headers = { [header: string]: value };

interface Request<H extends Headers = Headers> {
    doNotModifyHeaders?: boolean;
    headers: Headers;
}

interface SignedRequest<H extends Headers = Headers> extends Request<H> {
    headers: H & {
        Authorization: string;
        'X-Amz-Security-Token'?: string;
    }
}

export function sign<H extends Headers = Headers, R extends Request<H> = Request<H>>(options?: R, credentials?: any): R & SignedRequest<H>;
