montageDefine("7feb762","ui/token-field/token-field.reel/token-field.html",{text:'<!DOCTYPE html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=token-field.css>\n    <script type="text/montage-serialization">{"owner":{"prototype":"ui/token-field/token-field.reel","properties":{"element":{"#":"token-field"},"_autocomplete":{"@":"autocomplete"},"_tokenList":{"@":"tokenList"},"_tokensController":{"@":"tokensController"}},"bindings":{"_suggestedValue":{"<-":"@autocomplete.suggestedValue"},"_autocompleteValue":{"<-":"@autocomplete.value"}}},"tokensController":{"prototype":"ui/controller/array-controller","properties":{"selectObjectsOnAddition":true,"automaticallyOrganizeObjects":true},"bindings":{"content":{"<->":"@owner.values"}}},"tokenList":{"prototype":"ui/repetition.reel","properties":{"element":{"#":"token-list"},"isSelectionEnabled":true,"contentController":{"@":"tokensController"}}},"token":{"prototype":"ui/token-field/token.reel","properties":{"element":{"#":"token"}},"bindings":{"value":{"<-":"@tokenList.objectAtCurrentIteration"},"tokensController":{"<-":"@tokenList.contentController"},"textPropertyPath":{"<-":"@owner.textPropertyPath"},"allowAdHocValues":{"<-":"@owner.allowAdHocValues"}}},"autocomplete":{"prototype":"ui/autocomplete/autocomplete.reel","properties":{"element":{"#":"autocomplete"},"identifier":"autocomplete","delay":"500","value":""},"bindings":{"textPropertyPath":{"<-":"@owner.textPropertyPath"},"placeholder":{"<-":"@owner.placeholder"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=token-field class=montage-TokenField>\n        <div data-montage-id=token-list class=montage-TokenField-list>\n            <span data-montage-id=token></span>\n        </div>\n        <input data-montage-id=autocomplete class=montage-TokenField-Autocomplete tabindex=0>\n    </div>\n</body>\n</html>'})