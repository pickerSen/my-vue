/***
	1.vue的基础介绍
***/
var app = new Vue({
	el: '#app',
	data: {
    	message: 'Hello Vue!'
	}
})

var app2 = new Vue({
	el: '#app-2',
	data: {
		tipMessage: 'color:red',
		message: '提示文字'
	}
})
//条件与循环
var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true,
		todos: [
	      { text: '学习 JavaScript' },
	      { text: '学习 Vue' },
	      { text: '整个牛项目' }
		]
	}
})
//处理用户输入
var app4 = new Vue({
	el: '#app-4',
	data: {
		inputMessage: '默认',
		message: 'Hello vue2.0练习',
		buttonName: '按钮（反转）',
		button2Name: '切换',
		i: 0
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split(' ').reverse().join(' ')
		},
		clickEvent: function () {

			console.log('切换')
			console.log(this.i)
			let message = 'Hello vue2.0练习'
			if (this.i%2 == 1){
				this.message = message	
			} else {
				this.message = this.inputMessage
			}				
			this.i = this.i + 1
		}
	}
})
// 定义一个todo-item的新组件 eg：这样写必须要写到用这个组件new实例化对象的前面
Vue.component('todo-item', {
	template: '<li>这是一个代办事项</li>'
})
Vue.component('todo2-item', {
	// todo2-item组件现在接受一个“prop”，类似于自定义属性，这个属性名字叫todo
	// 请注意属性的写法
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
})
var app5 = new Vue({
	el: '#app-5',
	data: {
		arrayList: [
			{id: 0, text: 'asda'},
			{id: 1, text: '阿达'},
			{id: 2, text: '斯蒂芬'}
		]
	}
})
/**
	2. vue实例
**/
//  构造器
	// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
	// data 选项是特例，需要注意 - 在 Vue.extend() 中它必须是函数
var extendComponent = Vue.extend({
	// 扩展选项，它可以包含数据、模版、挂载元素、方法、生命周期钩子等选项
	data: function () {
		return	{
			message: '我是一个扩展的信息'
		}
	}
})
// 这样写在每个app6实例中都会代理其data对象里的所有属性，
// 只有这些被代理的属性是响应的，也就是说值的任何都会触发视图的重新渲染
// 如果是实例创建后添加新的属性，它不会触发视图更新
var data = {a: 1, i: 0} // 代理data属性
var app6 =new extendComponent({
	el: '#app-6',
	data: data,
	methods: {
		clickEvent: function () {

			console.log('切换')
			console.log(this.i)
			let message = '代理data.a变化'
			if (this.i%2 == 1){
				this.a = message
			} else {
				this.a = 1
			}				
			this.i = this.i + 1
			console.log(app6.$data)
		}
	}
})
console.log(app6.a === data.a)
console.log('app6.a === data.a:' + (app6.a === data.a))
app6.a = 10
console.log('data.a:' + data.a)
data.a = 11
console.log('app6.a:' + app6.a)
app6.$data.afterNew = '实例创建后添加新的属性不会触发视图更新'
data.afterNew = '修改afterNew属性值'
// 除了data属性之外，Vue的实例暴露了一些有用的实例属性和方法。这些实例属性都是有'$'前缀，以便和代理的data相互区分
console.log(app6.$data)
console.log(app6.$el)
var getApp6 = document.getElementById('app-6')
console.log('app6.$el === getApp6:' + (app6.$el === getApp6))
// $watch 也是一个Vue的一个实例方法，作用是当data.a,或app6.a 改变时触发函数调用
app6.$watch('a', function (newVal, oldVal) {
	console.log(oldVal)
})
