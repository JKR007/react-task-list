(this["webpackJsonpreact-task-list"]=this["webpackJsonpreact-task-list"]||[]).push([[0],{25:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(2),c=n.n(s),i=n(18),o=n.n(i),r=(n(25),n(9)),l=n(3),u=n(4),p=n(6),d=n(5),h=n(7),j=n.n(h),b=function(t){var e=t.task,n=e.completed,s=e.id,c=e.title;return Object(a.jsxs)("li",{className:"task-item",children:[Object(a.jsx)("input",{type:"checkbox",checked:n,onChange:function(){return t.handleChangeProps(s)}}),Object(a.jsx)("button",{onClick:function(){return t.deleteTaskProps(s)},children:"Delete"}),Object(a.jsx)("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.7,textDecoration:"line-through"}:null,children:c})]})},f=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{children:this.props.tasks.map((function(e){return Object(a.jsx)(b,{task:e,handleChangeProps:t.props.handleChangeProps,deleteTaskProps:t.props.deleteTaskProps},e.id)}))})}}]),n}(c.a.Component),k=function(){return Object(a.jsxs)("header",{style:{padding:"10px 0",lineHeight:"2em"},children:[Object(a.jsx)("h1",{style:{fontSize:"40px",marginBottom:"15px",textAlign:"center"},children:"Simple Tasklist App!"}),Object(a.jsx)("p",{style:{fontSize:"15px"},children:"Please add task-list item(s) through the input filed."})]})},m=n(19),O=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={title:""},t.onChange=function(e){t.setState(Object(m.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addTaskProps(t.state.title),t.setState({title:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container",children:[Object(a.jsx)("input",{type:"text",className:"input-text",placeholder:"Add Task...",name:"title",value:this.state.title,onChange:this.onChange}),Object(a.jsx)("input",{type:"submit",className:"input-submit",value:"Submit"})]})}}]),n}(s.Component),x=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={tasks:[]},t.handleChange=function(e){t.setState((function(t){return{tasks:t.tasks.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}}))},t.deleteTask=function(e){j.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){t.setState({tasks:Object(r.a)(t.state.tasks.filter((function(t){return t.id!==e})))})}))},t.addTask=function(e){e&&j.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){t.setState({tasks:[].concat(Object(r.a)(t.state.tasks),[e.data])})}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;j.a.get("https://jsonplaceholder.typicode.com/todos",{params:{_limit:10}}).then((function(e){t.setState({tasks:e.data})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(k,{}),Object(a.jsx)(O,{addTaskProps:this.addTask}),Object(a.jsx)(f,{tasks:this.state.tasks,handleChangeProps:this.handleChange,deleteTaskProps:this.deleteTask})]})}}]),n}(c.a.Component);o.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.80a82b33.chunk.js.map