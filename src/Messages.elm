module Messages exposing (..)

import Navigation exposing (Location)
import Players.Messages


-- MESSAGE
type Msg
    = PlayersMsg Players.Messages.Msg
    | OnLocationChange Location