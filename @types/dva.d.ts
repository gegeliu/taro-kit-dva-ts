//import { Dispatch } from 'redux'
interface IDvaLoadingProps {
    global: boolean;
    models: { [type: string]: boolean | undefined };
    effects: { [type: string]: boolean | undefined };
}

// by lazen at 2020-04-01
export interface DvaProps {
    dispatch: any;
    loading?: IDvaLoadingProps;
}
