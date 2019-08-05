import React, { Component, Fragment } from "react";
import AuthService from "../../components/Auth/auth-services";
import CardPolitico from "../../components/CardPolitico/CardPolitico";


class ResearchPage extends Component {
  constructor(props) {
    super(props);

    this.state={
        name:"",
        deputados:"",
    }
    this.service = new AuthService();
  }

  componentDidMount(){
    this.service.deputados()
    .then(response => {
      this.setState({
      deputados: [response.data]
    } )})
    .catch(err => console.log(err))
  }


  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <input name="name" type="text" value={this.state.name} placeholder="Pesquise seu político" onChange={(e)=>this.handleChange(e)} />
        <div>
            {this.state.deputados.filter(deputado => deputado.nomeDeputado.toUpperCase().includes(this.state.name.toUpperCase())).map(deputado => {
              return <CardPolitico>{deputado.nomeDeputado}</CardPolitico>
            })}
          </div>
      </>
    );
  }
}

export default ResearchPage;
