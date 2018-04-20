import gql from "graphql-tag";

export const query = gql`
  query settingByKey($key: String) {
    settingByKey(key: $key) {
      id,
      key,
      json,
      value,
    }
  }
`;

export const updateSetting = gql`
  mutation updateSetting($input: UpdateSettingInput!) {
    updateSetting(input: $input) {
      id,
      key,
      json,
      value,
    }
  }
`;