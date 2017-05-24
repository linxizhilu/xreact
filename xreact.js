function Component(state){
    this.state = state || {};
    this.update = function(props,children){
        this.props = props;
        this.children = children;
    };
    this.render =function(){};
}
var comp1 = new Component({name:'comp1'});
comp1.render = function(props,children){
    this.update(arguments);
    return '<div><span>test</span>'+comp2.render({name:'comp1'},children:'<i>children<i>')+'</div>'
}
var comp2 = new Component({name:'comp2'});
comp2.render=function(props,children){
    this.update(arguments);
    return '<p>'+this.props.name+'</p><div>'+this.children+'</div>';
}
function renderToDom(html,parent){
    parent.innerHTML = html;
}
renderToDom(comp1.render(),document.body);
