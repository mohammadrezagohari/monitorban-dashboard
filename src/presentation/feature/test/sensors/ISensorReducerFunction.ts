export interface SensorFormState {
    name: string;
    server_room: string;
    sensor_type: string;

    sensor_title_english: string;
    sensor_title_persian: string;
    sensor_type_feature: string;
    unit: string;
    sensor_address: string;
    notification_type: string;
    notification_number: string;
    notification_interval: string;
    return_to_normal_situation: string;
    recordable_changes: string;
    minimum_daily_record: string;
    maximum_critical: string;
    minimum_critical: string;
    maximum_warning: string;
    minimum_warning: string;
}

export type SensorFormAction =
    | { type: "SET_NAME"; payload: string }
    | { type: "SET_SERVER_ROOM"; payload: string }
    | { type: "SET_SENSOR_TYPE"; payload: string }
    | { type: "SET_SENSOR_TITLE_ENGLISH"; payload: string }
    | { type: "SET_SENSOR_TITLE_PERSIAN"; payload: string }
    | { type: "SET_SENSOR_TYPE_FEATURE"; payload: string }
    | { type: "SET_UNIT"; payload: string }
    | { type: "SET_SENSOR_ADDRESS"; payload: string }
    | { type: "SET_NOTIFICATION_TYPE"; payload: string }
    | { type: "SET_NOTIFICATION_NUMBER"; payload: string }
    | { type: "SET_NOTIFICATION_INTERVAL"; payload: string }
    | { type: "SET_RETURN_TO_NORMAL_SITUATION"; payload: string }
    | { type: "SET_RECORDABLE_CHANGES"; payload: string }
    | { type: "SET_MINIMUM_DAILY_RECORD"; payload: string }
    | { type: "SET_MAXIMUM_CRITIAL"; payload: string }
    | { type: "SET_MINIMUM_CRITIAL"; payload: string }
    | { type: "SET_MAXIMUM_WARNING"; payload: string }
    | { type: "SET_MINIMUM_WARNING"; payload: string }
    | { type: "RESET" };
