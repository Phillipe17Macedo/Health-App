import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  containerCard: {
    width: 320,
    height: 200,
    marginTop: 35,
    borderRadius: 15,
    backgroundColor: '#107357',
    borderWidth: 1,
    borderColor: '#65A693',
  },
  componenteCard: {
    width: '100%', 
    height: '100%',
    padding: 20,
  },
  nomeCartao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 30,
  },
  descricaoNome: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#fff',
  },
  dataNascimentoCartao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
  },
  descricaoDataNascimento: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#fff',
  },
  imagemLogo: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: '90%',
    width: 50,
    height: 25,
  },
  containerStatusPessoa: {
    flexDirection: 'row',
    marginTop: 30,
  },
  descricaoStatusPessoa: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 3,
  },
  containerStatus: {
    marginLeft: 10,
    backgroundColor: '#F22222', //STATUS ATIVO: #8CBF1F, STATUS DESATIVADO: #F22222
    width: 'auto',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  textoStatus: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#fff',
  },
});