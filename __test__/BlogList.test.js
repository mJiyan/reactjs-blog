import React from 'react';
import { BlogList } from '../src/views';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
const mockStore = configureMockStore([thunk]);


describe('rendering components', () => {
    it('mount', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <BlogList />
            </Provider>
        )
        const header = (<h3>Blog List</h3>);
        expect(wrapper.contains(header)).toEqual(false);
    });


})