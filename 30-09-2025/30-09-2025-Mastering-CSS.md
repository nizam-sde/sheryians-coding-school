# Positions in CSS

* Absolute Position
    * `  removes an element from the normal document flow and positions it relative to its nearest positioned ancestor  `

    * Properties like Top Left Right Bottom & Z-index can only be used when element is positioned.
    * Ex- if we have 3 cars in-line middle one get absolute position then it will be lift-up in air and his space will be covered/occupied by car 3

* Relative Position
    * `  allows an element to be positioned relative to its normal position in the document flow `
    * he will relatively position himself depending upon parents position or nearest positioned ancestor
    * if the parent is relative and child is absolute then child cannot go out side the parent

* Fixed Position
    * `  removed from document flow and positioned as per viewport and permanent fixed postion alloted `
    * if position is fixed it will be throughout the website stuck at the given position

* Sticky Position
    * `  behaves like relative position once cross the viewport normal area start behaving like fixed `
    * if sticky used in sub container then after the sub container ends along with container sticky element also be scrolled up.