# DevRadar - API

DevRadar is a RocketSeat’s back-end project that is learned at OmniStack week 10.

### Features:

-   Create developer;
-   Show all developer;
-   Search developer with filters;

### Routes:

| Method | Action            | Query                                | Body      | Path    |
| ------ | ----------------- | ------------------------------------ | --------- | ------- |
| POST   | create-developer  |                                      | [B1](#b1) | /devs   |
| GET    | show-developers   |                                      |           | /devs   |
| GET    | search-developers | [ "latitude", "longitude", "techs" ] |           | /search |

###### B1

> Request body for `create-developer`

```json
{
    "github": "igor-nm", // github username
    "latitude": -21.2202298,
    "longitude": -50.4204816, // position
    "techs": "Kotlin, NodeJS, React Native" // techs that you use
}
```
