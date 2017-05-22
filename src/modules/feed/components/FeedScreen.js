import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import FeedList from './FeedList.js';
import CardHeader from '../../../components/feed/CardHeader';
import { colors } from '../../../assets/styles/styles'


import * as actions from './../actions/index';
import * as navActions from '../../navigator/actions/index';

class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.updateTitle = this.updateTitle.bind(this);
    this.state = {
      title: props.route.params.title,
      tab: props.route.params.tab
    };
  }

  static route = {
    navigationBar: {
      visible: false,
      renderTitle: ({ params }) => {
        const { context = {} } = params;
        const { state = {} } = context;
        return (
          <View
            style={{
              width: '100%',
              height: 48,
              justifyContent: 'center'
            }}
          >
            <Text style={{ fontSize: 18, color: '#FFF' }}>{state.title}</Text>
          </View>
        );
      }
    }
  }

  componentWillMount() {
    const { feedActions, navActions } = this.props;
    feedActions.fetchFeed();
    //navActions.setAlert({ title: 'Do I have a title?', message: 'Oh yes, I do! =)', type: 'info', duration: 6000 });
  }
  componentDidMount() {
    const { navigator } = this.props;
    setTimeout(() => {
      navigator.updateCurrentRouteParams({
        context: this
      });
    }, 600);
  }
  async updateTitle(item) {
    const { tabLabel } = item.ref.props;
    const { navigator } = this.props;
    await this.setState({ title: tabLabel });
    navigator.updateCurrentRouteParams({
      context: this
    });
    // setTimeout(() => {
    //   navigator.updateCurrentRouteParams({
    //     context: this
    //   });
    // }, 600);
  }

  render() {
    return (
      /*<ScrollableTabView
        renderTabBar={() => <View />}
        tabBarBackgroundColor='red'
        tabBarTextStyle={{ fontWeight: '600' }}
        onChangeTab={item => this.updateTitle(item)}
        initialPage={this.state.tab}

      >
        <View style={{ flex: 1 }} tabLabel="Facebook Ads">
          <FeedList index={0} name="Primeira" />
        </View>
        <View style={{ flex: 1 }} tabLabel="Google Ads">
          <FeedList index={1} name="Segunda" />
        </View>
        <View style={{ flex: 1 }} tabLabel="Twitter Ads">
          <FeedList index={2} name="Terceira" />
        </View>
      </ScrollableTabView>
    */
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <CardHeader
            title="3 Dicas de Publicações no Perfil para Fotógrafos"
            tag="Facebook"
            time="5 minutos"
            level="Iniciante"
            color={colors.categorieFacebook}
            image={{ uri: 'http://i.huffpost.com/gen/3971736/images/o-HAPPY-PEOPLE-facebook.jpg' }}
          />
        </View>
        <View style={{ flex: 3 }}>
          <Text style={{ color: colors.blackPrimary, fontSize: 14, padding: 5 }}>
            Ainda assim, existem dúvidas a respeito de como a complexidade dos estudos efetuados exige a precisão e a definição dos índices pretendidos. Caros amigos, a execução dos pontos do programa apresenta tendências no sentido de aprovar a manutenção de alternativas às soluções ortodoxas. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a contínua expansão de nossa atividade não pode mais se dissociar do investimento em reciclagem técnica.
            No entanto, não podemos esquecer que a revolução dos costumes auxilia a preparação e a composição das posturas dos órgãos dirigentes com relação às suas atribuições. Do mesmo modo, o entendimento das metas propostas causa impacto indireto na reavaliação das novas proposições. A prática cotidiana prova que a estrutura atual da organização desafia a capacidade de equalização das direções preferenciais no sentido do progresso. Todavia, a necessidade de renovação processual garante a contribuição de um grupo importante na determinação dos métodos utilizados na avaliação de resultados.
          </Text>
        </View>
      </View>
    );
  }
}

FeedScreen.PropTypes = {
  navigator: PropTypes.object
};
FeedScreen.defaultProps = {
  navigator: {}
}

export default connect(
  state => ({
    feedState: state.feed
  }),
  dispatch => ({
    feedActions: bindActionCreators(actions, dispatch),
    navActions: bindActionCreators(navActions, dispatch)
  })
)(FeedScreen);
