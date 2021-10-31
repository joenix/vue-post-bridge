<template>
  <div class="post-bridge" @open="open">
    <template v-if="!auto">
      <button type="button" class="post-bridge" @click="open">
        {{ message }}
      </button>
    </template>
  </div>
</template>

<script>
const preset = {
  // 是否要在影院模式显示: ie
  channelmode: "no",
  // 是否添加目录按钮: ie
  directories: "no",
  // 浏览器是否显示全屏模式: ie
  fullscreen: "no",
  // 是否显示地址字段
  location: "no",
  // 是否显示菜单栏
  menubar: "no",
  // 是否可调整窗口大小
  resizable: "yes",
  // 是否显示滚动条
  scrollbars: "yes",
  // 是否要添加一个状态栏
  status: "no",
  // 是否显示标题栏
  titlebar: "no",
  // 是否显示浏览器工具栏
  toolbar: "no"
};

export default {
  name: "vue-post-bridge",
  props: {
    message: {
      type: [String],
      default() {
        return "Press me to open window";
      }
    },
    auto: {
      type: [Boolean],
      default() {
        return false;
      }
    },
    title: {
      type: [String],
      default() {
        return this.name;
      }
    },
    url: {
      type: [String],
      default() {
        return "";
      }
    },
    outer: {
      type: [Boolean],
      default() {
        return false;
      }
    },
    option: {
      type: [Object],
      default() {
        return "";
      }
    }
  },
  data() {
    return {
      win: null,
      size: {
        width: 480,
        height: 360,
        left: 0,
        top: 0
      },
      relate: {
        top: "height",
        left: "width"
      }
    };
  },
  computed: {
    screen() {
      return {
        width: this.outer ? window.outerWidth : window.innerWidth,
        height: this.outer ? window.outerHeight : window.innerHeight
      };
    },
    context() {
      return this.$slots.default;
    },
    feature() {
      // Loop Size
      this.foreach(this.size, (value, key) => {
        // Set Key
        this.size[key] = this.option[key];
      });

      // Set Temp
      let the = Object.assign({}, preset, this.option, this.size);

      // Set Room
      the = this.room(the);

      // Return
      return the;
    }
  },
  methods: {
    open() {
			window.$win = window.open(this.url, this.title, this.process());
    },

    foreach(target, callback) {
      // Loop
      Object.keys(target).forEach(key => callback(target[key], key));
    },

    percent(value) {
      return (value.substr(0, value.length - 1) - 0) / 100;
    },

    central(mode) {
      return this.end(mode) / 2;
    },

    start(mode) {
      return 0;
    },

    end(mode) {
      return this.screen[this.relate[mode]] - this.size[this.relate[mode]];
    },

    orient(mode, value) {
      if (/\%$/.test(value)) {
        return this.screen[this.relate[mode]] * this.percent(value);
      }

      switch (value) {
        case "center":
          return this.central(mode);
        case "top":
          return this.start(mode);
        case "left":
          return this.start(mode);
        case "bottom":
          return this.end(mode);
        case "right":
          return this.end(mode);
      }

      return value;
    },

    room(option) {
      // Get Size of Option
      const { top, left, width, height } = option;

      // Top
      option.top = this.orient("top", top);

      // Left
      option.left = this.orient("left", left);

      // Return
      return option;
    },

    process(param = "") {
      // Loog
      Object.keys(this.feature).forEach((key, index) => {
        // Stringify
        param += `${index ? "," : ""}${key}=${this.feature[key]}`;
      });

      // Return
      return param;
    }
  }
};
</script>
