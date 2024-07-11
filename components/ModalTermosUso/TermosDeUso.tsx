import React from "react";
import { Modal, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";

interface TermosDeUsoModalProps {
  visible: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const TermosDeUsoModal: React.FC<TermosDeUsoModalProps> = ({
  visible,
  onAccept,
  onDecline,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onDecline}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView>
            <Text style={styles.title}>Termos de Uso</Text>
            <Text style={styles.content}>
              Bem-vindo ao aplicativo de agendamento de consultas da Aserpa. Ao utilizar nosso aplicativo, você concorda com os seguintes termos de uso. Por favor, leia-os atentamente.

              {"\n\n"}1. Aceitação dos Termos

              {"\n\n"}Ao acessar e utilizar o aplicativo da Aserpa, você concorda em cumprir e estar sujeito a estes termos de uso. Se você não concorda com algum destes termos, por favor, não utilize o aplicativo.

              {"\n\n"}2. Coleta e Uso de Informações Pessoais

              {"\n\n"}Para proporcionar uma experiência de usuário eficaz, nosso aplicativo coleta e utiliza as seguintes informações pessoais:

              {"\n\n"}- CPF
              {"\n"}- Data de nascimento
              {"\n"}- Nome completo
              {"\n"}- Foto
              {"\n"}- Informações de dependentes
              {"\n"}- Telefone

              {"\n\n"}Essas informações são utilizadas exclusivamente para:

              {"\n\n"}- Verificação da sua identidade.
              {"\n"}- Agendamento e gerenciamento de consultas médicas.
              {"\n"}- Comunicação de informações relevantes sobre suas consultas.
              {"\n"}- Melhorar a experiência do usuário no aplicativo.

              {"\n\n"}3. Compartilhamento de Informações

              {"\n\n"}As informações pessoais coletadas pelo nosso aplicativo serão compartilhadas apenas com:

              {"\n\n"}- Profissionais de saúde e unidades de atendimento associadas ao seu agendamento.
              {"\n"}- Terceiros autorizados que auxiliam no funcionamento do aplicativo, sob obrigação de confidencialidade.

              {"\n\n"}4. Segurança das Informações

              {"\n\n"}A Aserpa se compromete a proteger a segurança das suas informações pessoais. Utilizamos medidas de segurança adequadas para proteger suas informações contra acesso, alteração, divulgação ou destruição não autorizada.

              {"\n\n"}5. Responsabilidades do Usuário

              {"\n\n"}Ao utilizar o aplicativo, você se compromete a:

              {"\n\n"}- Fornecer informações verdadeiras, exatas e completas.
              {"\n"}- Manter a confidencialidade das suas credenciais de login.
              {"\n"}- Notificar imediatamente a Aserpa sobre qualquer uso não autorizado da sua conta.

              {"\n\n"}6. Modificações dos Termos de Uso

              {"\n\n"}A Aserpa reserva-se o direito de modificar estes termos de uso a qualquer momento. Notificaremos você sobre quaisquer mudanças significativas por meio do aplicativo ou por outros meios de comunicação. O uso continuado do aplicativo após a publicação de quaisquer alterações constitui sua aceitação dos novos termos de uso.

              {"\n\n"}7. Contato

              {"\n\n"}Se você tiver qualquer dúvida ou preocupação sobre estes termos de uso ou sobre a forma como suas informações pessoais são tratadas, por favor, entre em contato conosco pelo e-mail suporte@aserpa.com.

              {"\n\n"}Aserpa Saúde
              {"\n"}Data da última atualização: 11/07/2024
            </Text>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonAceitar} onPress={onAccept}>
              <Text style={styles.buttonText}>Aceitar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNegar} onPress={onDecline}>
              <Text style={styles.buttonText}>Recusar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TermosDeUsoModal;