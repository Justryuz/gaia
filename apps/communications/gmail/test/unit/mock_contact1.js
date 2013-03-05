'use strict';

/*

  This is the entry we are getting

  <entry xmlns="http://www.w3.org/2005/Atom" xmlns:gContact="http://schemas.google.com/contact/2008" xmlns:batch="http://schemas.google.com/gdata/batch" xmlns:gd="http://schemas.google.com/g/2005" gd:etag="&quot;RXg9fDVSLit7I2A9WhBSGUsPQgU.&quot;">
    <id>http://www.google.com/m8/feeds/contacts/mepartoconmigo%40gmail.com/base/2fc27a388c2bd974</id>
    <updated>2013-02-27T11:45:14.664Z</updated>
    <app:edited xmlns:app="http://www.w3.org/2007/app">2013-02-27T11:45:14.664Z</app:edited>
    <category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/contact/2008#contact" />
    <title>My Shiny Contact</title>
    <content>This is a Note</content>
    <link rel="http://schemas.google.com/contacts/2008/rel#photo" type="image/*" href="https://www.google.com/m8/feeds/photos/media/mepartoconmigo%40gmail.com/2fc27a388c2bd974" gd:etag="&quot;LhMgGHAHWit7I2BuPF4FFCt_B0ZEGiYpXwg.&quot;" />
    <link rel="self" type="application/atom+xml" href="https://www.google.com/m8/feeds/contacts/mepartoconmigo%40gmail.com/full/2fc27a388c2bd974" />
    <link rel="edit" type="application/atom+xml" href="https://www.google.com/m8/feeds/contacts/mepartoconmigo%40gmail.com/full/2fc27a388c2bd974" />
    <gd:name>
        <gd:fullName>My Shiny Contact</gd:fullName>
        <gd:givenName>My</gd:givenName>
        <gd:additionalName>Shiny</gd:additionalName>
        <gd:familyName>Contact</gd:familyName>
    </gd:name>
    <gContact:birthday when="1990-01-01" />
    <gd:organization rel="http://schemas.google.com/g/2005#other">
        <gd:orgName>The Company</gd:orgName>
        <gd:orgTitle>Title in Company</gd:orgTitle>
    </gd:organization>
    <gd:email rel="http://schemas.google.com/g/2005#home" address="juan@palomo.es" primary="true" />
    <gd:email rel="http://schemas.google.com/g/2005#work" address="workemail@email.com" />
    <gd:im address="instantmessaging" protocol="http://schemas.google.com/g/2005#GOOGLE_TALK" rel="http://schemas.google.com/g/2005#other" />
    <gd:phoneNumber rel="http://schemas.google.com/g/2005#work">+1555111333444222</gd:phoneNumber>
    <gd:structuredPostalAddress rel="http://schemas.google.com/g/2005#home">
        <gd:formattedAddress>This is the Street
The PO Box
The Nieghborhood, The City, The State The Zip
The Country</gd:formattedAddress>
        <gd:street>This is the Street</gd:street>
        <gd:neighborhood>The Nieghborhood</gd:neighborhood>
        <gd:pobox>The PO Box</gd:pobox>
        <gd:postcode>The Zip</gd:postcode>
        <gd:city>The City</gd:city>
        <gd:region>The State</gd:region>
        <gd:country>The Country</gd:country>
    </gd:structuredPostalAddress>
    <gContact:website href="http://www.myurl.com" rel="profile" />
    <gContact:groupMembershipInfo deleted="false" href="http://www.google.com/m8/feeds/groups/mepartoconmigo%40gmail.com/base/6" />
</entry>

*/

var MockGoogleEntry = (function MockGoogleEntry() {

  var entryBuffer = '<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gContact="http://schemas.google.com/contact/2008" xmlns:batch="http://schemas.google.com/gdata/batch" xmlns:gd="http://schemas.google.com/g/2005" gd:etag="&quot;RXg9fDVSLit7I2A9WhBSGUsPQgU.&quot;"> <id>http://www.google.com/m8/feeds/contacts/mepartoconmigo%40gmail.com/base/2fc27a388c2bd974</id> <updated>2013-02-27T11:45:14.664Z</updated> <app:edited xmlns:app="http://www.w3.org/2007/app">2013-02-27T11:45:14.664Z</app:edited> <category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/contact/2008#contact" /> <title>My Shiny Contact</title> <content>This is a Note</content> <link rel="http://schemas.google.com/contacts/2008/rel#photo" type="image/*" href="https://www.google.com/m8/feeds/photos/media/mepartoconmigo%40gmail.com/2fc27a388c2bd974" gd:etag="&quot;LhMgGHAHWit7I2BuPF4FFCt_B0ZEGiYpXwg.&quot;" /> <link rel="self" type="application/atom+xml" href="https://www.google.com/m8/feeds/contacts/mepartoconmigo%40gmail.com/full/2fc27a388c2bd974" /> <link rel="edit" type="application/atom+xml" href="https://www.google.com/m8/feeds/contacts/mepartoconmigo%40gmail.com/full/2fc27a388c2bd974" /> <gd:name> <gd:fullName>My Shiny Contact</gd:fullName> <gd:givenName>My</gd:givenName> <gd:additionalName>Shiny</gd:additionalName> <gd:familyName>Contact</gd:familyName> </gd:name> <gContact:birthday when="1990-01-01" /> <gd:organization rel="http://schemas.google.com/g/2005#other"> <gd:orgName>The Company</gd:orgName> <gd:orgTitle>Title in Company</gd:orgTitle> </gd:organization> <gd:email rel="http://schemas.google.com/g/2005#home" address="juan@palomo.es" primary="true" /> <gd:email rel="http://schemas.google.com/g/2005#work" address="workemail@email.com" /> <gd:im address="instantmessaging" protocol="http://schemas.google.com/g/2005#GOOGLE_TALK" rel="http://schemas.google.com/g/2005#other" /> <gd:phoneNumber rel="http://schemas.google.com/g/2005#work">+1555111333444222</gd:phoneNumber> <gd:structuredPostalAddress rel="http://schemas.google.com/g/2005#home"> <gd:formattedAddress>This is the Street The PO Box The Nieghborhood, The City, The State The Zip The Country</gd:formattedAddress> <gd:street>This is the Street</gd:street> <gd:neighborhood>The Nieghborhood</gd:neighborhood> <gd:pobox>The PO Box</gd:pobox> <gd:postcode>The Zip</gd:postcode> <gd:city>The City</gd:city> <gd:region>The State</gd:region> <gd:country>The Country</gd:country> </gd:structuredPostalAddress> <gContact:website href="http://www.myurl.com" rel="profile" /> <gContact:groupMembershipInfo deleted="false" href="http://www.google.com/m8/feeds/groups/mepartoconmigo%40gmail.com/base/6" /> </entry>';
  var parser = new DOMParser();
  return parser.parseFromString(entryBuffer, 'text/xml');
})();
