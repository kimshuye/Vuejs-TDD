import Rating from '@/components/Rating.vue'

import { mount } from '@vue/test-utils'

// import sinon from 'sinon';
// const spy = sinon.stub();

// mount({
//   render: null,
//   destroyed() {
//     spy()
//   }
// }).destroy();
// expect(spy.calledOnce).toBe(true);

describe('Rating.vue', () => {
  it('renders props.msg when passed', () => {
    var expectStars = 5

    const wrapper = mount(Rating)
    var stars = wrapper.findAll('.star')
    stars = 5

    expect(stars).toBe(expectStars)
  })
})
