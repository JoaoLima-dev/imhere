import {Text, View, TextInput, TouchableOpacity, FlatList} from "react-native";
import { Participant } from "../../components/participant";

import { styles } from "./styles";

export default function Home() {
  const participants = ["John", "Shean", "Mary", "Kate","Joseph", "Mathew", "Hanna", "Kimberly", "Ann"];

  function handleParticipantAdd() {
    console.log("You clicked at Add button!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`vc removeu o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event Name</Text>
      <Text style={styles.eventDate}>Tuesday, 03/01/2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant Name"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
        <Participant
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove("Rodrigo")}
        />
        )}
        showsVerticalScrollIndicator={false}
      />
        
      
    </View>
  );
}
