import { SensorFormAction, SensorFormState } from "./ISensorReducerFunction";

export const initialSensorState: SensorFormState = {
  name: "",
  server_room: "",
  sensor_type: "",

  sensor_title_english: "",
  sensor_title_persian: "",
  sensor_type_feature: "",
  unit: "",
  sensor_address: "",
  notification_type: "",
  notification_number: "",
  notification_interval: "",
  return_to_normal_situation: "",
  recordable_changes: "",
  minimum_daily_record: "",
  maximum_critical: "",
  minimum_critical: "",
  maximum_warning: "",
  minimum_warning: "",
  // TODO:: sensor image should be added!
};

export function sensorFormReducer(
  state: SensorFormState,
  action: SensorFormAction
) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_SERVER_ROOM":
      return { ...state, server_room: action.payload };
    case "SET_SENSOR_TYPE":
      return { ...state, sensor_type: action.payload };
    case "SET_SENSOR_TITLE_ENGLISH":
      return { ...state, sensor_title_english: action.payload };
    case "SET_SENSOR_TITLE_PERSIAN":
      return { ...state, sensor_title_persian: action.payload };
    case "SET_SENSOR_TYPE_FEATURE":
      return { ...state, sensor_type_feature: action.payload };
    case "SET_UNIT":
      return { ...state, unit: action.payload };
    case "SET_SENSOR_ADDRESS":
      return { ...state, sensor_address: action.payload };
    case "SET_NOTIFICATION_TYPE":
      return { ...state, notification_type: action.payload };
    case "SET_NOTIFICATION_NUMBER":
      return { ...state, notification_number: action.payload };
    case "SET_NOTIFICATION_INTERVAL":
      return { ...state, notification_interval: action.payload };
    case "SET_RETURN_TO_NORMAL_SITUATION":
      return { ...state, return_to_normal_situation: action.payload };
    case "SET_RECORDABLE_CHANGES":
      return { ...state, recordable_changes: action.payload };
    case "SET_MINIMUM_DAILY_RECORD":
      return { ...state, minimum_daily_record: action.payload };
    case "SET_MAXIMUM_CRITIAL":
      return { ...state, maximum_critical: action.payload };
    case "SET_MINIMUM_CRITIAL":
      return { ...state, minimum_critical: action.payload };
    case "SET_MAXIMUM_WARNING":
      return { ...state, maximum_warning: action.payload };
    case "SET_MINIMUM_WARNING":
      return { ...state, minimum_warning: action.payload };
    case "RESET":
      return initialSensorState;

    default:
      return state;
  }
}
