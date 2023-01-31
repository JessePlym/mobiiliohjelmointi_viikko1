import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputElement: {
    borderColor: "gray",
    borderWidth: 1
  },
  inputView: {
    width: 200,
    marginBottom: 16
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 200,
    marginBottom: 80
  },
  text: {
    fontSize: 18
  }
});