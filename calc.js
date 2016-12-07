



const app = () => {
    const React = react,
        DOM = reactDom    
    
    class Calculator extends React.Component {
        constructor(p){
            super(p)
            this.state = {}
        }
        eval(x) {
            const result = this.state.result || '';
            
            switch (x) {
                case 'C': return ``;
                case 'x': return `${result}*`;
                case '=': return eval(result);
                default: return `${result}${x}`;
            }
        }
        handle(e, x){
            e.preventDefault()
            this.setState({ result: this.eval(x) })
        }
        render(){
            return (
                <div className="calculator">
                <div className="a1-4" onClick={e => this.handle(e, 'C')}>C</div>
                <div className="a3-4">{this.state.result}</div>
                {
                    [7,8,9,'/',4,5,6,'x',1,2,3,'-',0,'.','=','+']
                    	.map(x => 
                             <div
                             	className="a1-4"
                             	onClick={e => this.handle(e, x)}>
                             	{x}
                             </div>
                        )
                }
            </div>
            )}
    }
    
    DOM.render(<Calculator />, document.body)
}

require('react', 'react-dom').then(app)