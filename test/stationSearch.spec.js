import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import stationSearch from '@/components/stationSearch'

const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper

beforeEach(() => {
    let vuetify = new Vuetify()

    wrapper = mount(stationSearch, {
        store: new Vuex.Store({
            state: { products: [] }
        }),
        localVue,
        vuetify,
        propsData: { label: 'Test Title' },
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Station search component', () => {
  
    test('is fully functional', () => {
        expect(wrapper.element).toMatchSnapshot()
    })

})