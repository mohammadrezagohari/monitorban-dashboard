export interface SensorFormValues {
  sensorName: string;
  image: File;
  maximumCritical: number;
  minimumCritical: number;
  maximumWarning: number;
  minimumWarning: number;
  minimumDailyRecord: string;
  notificationInterval: string;
  returnNotifToNormalOptions: string;
  notificationNumber: number;
  notificationType: string;
  recordableChanges: string;
  sensorAddress: string;
  sensorTitleEnglish: string;
  sensorTitlePersian: string;
  sensorType: string;
  sensorTypeFeature: string;
  sensorUnit: string;
  serverRoom: string;
}