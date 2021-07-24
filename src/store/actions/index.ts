import * as userActionCreators from './auth';
import * as productActionCreators from './product';

export default {
    ...userActionCreators,
    ...productActionCreators,
}