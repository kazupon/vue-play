import Vue from 'vue'
import Vuex from 'vuex'
import {play} from '../src/play'

import WithText from './WithText.play'
import WithEmoji from './WithEmoji.play'
import Colorful from './Colorful.play'
import Rounded from './Rounded.play'

/*
import MyButton from './MyButton.vue'

Vue.component('my-button', MyButton)

play('Button')
  .add('with text', {
    template: `<my-button :handle-click="log">{{ $store.state.count }}</my-button>`,
    store: new Vuex.Store({
      state: {count: 0}
    }),
    methods: {
      log() {
        this.$store.state.count++
      }
    }
  })
  .add('with emoji', `<my-button>🤔</my-button>`)
  .add('colorful', {
    render(h) {
      return h(MyButton, {
        props: {color: 'pink'}
      }, ['hello world'])
    }
  })
  .add('rounded', `<my-button :rounded="true">rounded</my-button>`)
  */

play('Button')
  .add(WithText)
  .add(WithEmoji)
  .add(Colorful)
  .add(Rounded)
