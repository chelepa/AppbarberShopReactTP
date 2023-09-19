export type PermissionRequest = {
    permission: string
    description: string
}


export type PermissionResponse = {
    id: BigInteger
    permission: string
    description: string
}