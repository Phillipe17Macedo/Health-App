import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TokenViewModel {
  accessToken: string;
  expiresIn: number;
}

interface AderenteResponse {
  idAderente: number;
  idDependente: number;
  nome: string;
  cpf: string;
  dataNasc: string;
  tipoAdesao: string;
  aderenteAtivo: string;
  statusContrato: boolean;
  titularDoContrato: boolean;
  fotoBase64: string;
  tokenViewModel: TokenViewModel;
}  

export async function buscarAderente(cpf: string, titular: boolean): Promise<AderenteResponse> {
  try {
    const response = await axiosConfig.get<AderenteResponse>(`/Aderente/BuscarAderente/${cpf}/${titular}`);
    console.log("Metodo Buscar Aderente - resposta da API:", response.data);

    const { accessToken, expiresIn } = response.data.tokenViewModel;

    // Calcula a data de expiração do token
    const expirationDate = new Date();
    expirationDate.setSeconds(expirationDate.getSeconds() + expiresIn);

    // Armazena o token e a data de expiração no AsyncStorage
    await AsyncStorage.setItem("accessToken", accessToken);
    await AsyncStorage.setItem("tokenExpirationDate", expirationDate.toISOString());

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar aderente:", error);
    throw error;
  }
}