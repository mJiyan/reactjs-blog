import React from 'react';
import { BlogList } from '../src/views';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const mockStore = configureMockStore([thunk]);
const initialState = {
    BlogReducer: {
        blogs: []
    },
    blogs: [
        {
            title: "'Dog coronavirus found in humans’ – why you shouldn’t worry ",
            content: "Scientists have found a new canine coronavirus in a handful of people hospitalised with pneumonia. This may sound alarming, but once we unpack it, you will see that there’s no reason to lose any sleep. The discovery of the canine coronavirus in eight people at a hospital in Sarawak, Malaysia, was reported in Clinical Infectious Diseases by a group of highly regarded international scientists. So does this mean dogs can spread coronaviruses to humans? The first thing to clarify is what canine coronavirus is. Importantly, it is quite distinct from SARS-CoV-2, the virus that causes COVID-19. The coronavirus family can be divided into four groups of viruses: alpha, beta, gamma and delta coronaviruses. SARS-CoV-2 falls within the betacoronaviruses group, whereas the canine coronaviruses are in the entirely separate alphacoronavirus group. Scientists have known about canine coronaviruses for almost 50 years. These viruses have existed in relative obscurity over most of this period, being of interest only to veterinary virologists and occasional dog owners. There are no previous reports of these viruses infecting people. But the sudden international spotlight on all coronaviruses is finding coronaviruses in places we haven’t looked before. ",
            isPublished: true,
            id: 1
        },
        {
            title: "Is 150 years really the limit of human lifespan?",
            content: "While most of us can expect to live to around 80, some people defy expectations and live to be over 100. In places such as Okinawa, Japan and Sardinia, Italy, there are many centenarians. The oldest person in history – a French woman named Jeanne Calment – lived to 122. When she was born in 1875, the average life expectancy was roughly 43. But just how long could a human actually live? It’s a question people have been asking for centuries. While average life expectancy (the number of years a person can expect to live) is relatively easy to calculate, maximum lifespan estimates (the greatest age a human could possibly reach) are much harder to make. Previous studies have placed this limit close to 140 years of age. But a more recent study proposes that the limit to human lifespan is closer to 150.",
            isPublished: false,
            id: 2
        }
    ]
}
const store = mockStore(initialState);


describe('rendering components', () => {
    test('it should have the header', () => {

        const wrapper = mount(
            <Provider store={store}>
                <BlogList />
            </Provider>
        );
        const header = (<h3>Blog List</h3>);
        expect(wrapper.contains(header)).toEqual(true);
    });


});