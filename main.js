var app = new Vue({
		el: '#app',
		data: {
	    	message: 'Hello Vue!'
		}
	})

var app2 = new Vue({
		el: '#app-2',
		data: {
			tipMessage: 'color:red'
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
var app3 = new Vue({
		el: '#app-4',
		data: {
			message: 'Hello vue2.0练习',
			buttonName: '按钮（反转）',
			button2Name: '切换',
		},
		methods: {
			reverseMessage: function () {
				this.message = this.message.split(' ').reverse().join(' ')
			},
			clickEvent: function () {
				
			}
		}
	})