<template>
  <div class="home">
    <el-input v-model="input"></el-input>
    <el-button type="primary" icon="el-icon-edit" circle @click="chooseFile"></el-button>
    <div class="names-con"  v-for="(val, key, index) in iptNamesObj" :key="'a' + index" v-show="showArr[index]">
      {{key}}
      <div class="names-1">
        <template  v-for="(item, i) in val">
          <div class="names-2" v-if="item[1] > input">
            {{item[0]}}:
            <span>{{item[1]}}</span>
          </div>
        </template>
      </div>
    </div>

    <input type="file" v-show="0" ref="iptFile" @change="changeFile" webkitdirectory>
  </div>
</template>

<script>

  export default {
    name: "Home",
    components: {
    },
    create() {

    },
    data() {
      return {
        input: 80,
        iptNames: [],
        iptNamesObj: {},
        showArr: [],
        nameObj: {},
        nameArr: ['智联招聘'],
      }
    },
    watch: {
      input(){
        let arr = [];
        for(let key in this.iptNamesObj){
          let val = this.iptNamesObj[key];
          val.sort((a, b) => {
            return b[1] - a[1];
          })
          arr.push(val[0][1] > this.input);
        }
        this.showArr = arr;
      },
    },
    methods: {
      changeFile(e){
        let files = this.$refs.iptFile.files;
        let names = [];
        let obj = {};
        let nameObj = {};
        for(let key in files){
          let val = files[key];
          if(typeof val == "object") {
            let name = val.name;
            let newName = name.replace(/\d/g, '');
            newName = name.newName(/\d/g, '');
            names.push(val.name)
          }
        }
        this.nameObj = nameObj;
        names.forEach((v, i) => {
          if(i == names.length - 1){
            return
          }
          let n = i + 1;
          for(n; n < names.length; n++){
            let v1 = names[n];
            let num = parseInt(parseFloat(this.similar(v, v1)) * 100);
            if(obj[v]){
              obj[v].push([v1, num]);
            }else{
              obj[v] = [[v1, num]];
            }
          }
        })
        let arr = [];
        for(let key in obj){
          let val = obj[key];
          val.sort((a, b) => {
            return b[1] - a[1];
          })
          arr.push(val[0][1] > this.input);
        }
        this.showArr = arr;
        this.iptNamesObj = obj;
        this.iptNames = names;
      },
      chooseFile(){
        this.$refs.iptFile.click();
      },
      similar(s, t, f) {
        if (!s || !t) {
          return 0
        }
        var l = s.length > t.length ? s.length : t.length
        var n = s.length
        var m = t.length
        var d = []
        f = f || 3
        var min = function(a, b, c) {
          return a < b ? (a < c ? a : c) : (b < c ? b : c)
        }
        var i, j, si, tj, cost
        if (n === 0) return m
        if (m === 0) return n
        for (i = 0; i <= n; i++) {
          d[i] = []
          d[i][0] = i
        }
        for (j = 0; j <= m; j++) {
          d[0][j] = j
        }
        for (i = 1; i <= n; i++) {
          si = s.charAt(i - 1)
          for (j = 1; j <= m; j++) {
            tj = t.charAt(j - 1)
            if (si === tj) {
              cost = 0
            } else {
              cost = 1
            }
            d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
          }
        }
        let res = (1 - d[n][m] / l)
        return res.toFixed(f)
      },
    },
    mounted() {

    },
  }
</script>

<style lang="less" scoped>
  .home {
    padding: 50px;
    color: #000;

    .names{
      margin-top: 10px;
    }
    .names-con{
      margin-top: 30px;

      .names-1{
        > div{
          width: max-content;
          span{
            color: #3f1ad7;
          }
        }
      }
    }

    .el-input{
      width: 200px;
      margin-right: 20px;
    }
  }
</style>