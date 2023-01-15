import * as actions from './actions'
import * as getter from './getter'
import * as mutations from './mutations'
import state from './state'

const myCustomModule = {
    namespaced: true,
    actions,
    getter,
    mutations,
    state
}

export default myCustomModule