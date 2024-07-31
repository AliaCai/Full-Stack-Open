I am not going to learn it now because it does not seem that useful for me now.


JWT (authorization !=authentication): 
- use session (session id -> cookie -> server) (usually) > information about user saved in server
- JWT: json web token to cokkie > user information saved in token (basically client)
- transfer to aother server semlessly (loged in seemlessly)

Toekn: (seperate by .)
1. Header (lalgorithm : eg: slg: HS256 & tojen type) 
2. Datea (playload) (sub ->id, name, iat -issue at date, ext, eat)
3. verify signature (verify the user did not mess the token: base64UrlENcide(header) + "." + base 64URL Encode (playload), +specufufic secret key(?) -> hashed with algorithm)

1. JWT authenticaion (create token + send + authenticate them on server) (refresh jwt token + rewoke privilige from suer + logout)

>npm init -y
>