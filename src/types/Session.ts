export interface ISession {
    email?: string | null, 
    password?: string | null
    isLogged?: boolean,
}
  
export type SessionState = ISession;
  
export type SessionAction = {
    type: string
    payload: ISession
}
  
export type DispatchType = (args: SessionAction) => SessionAction