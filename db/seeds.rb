# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)





#Airline 
singapore_airlines=Airline.create(name: 'Singapore Airlines',image: 'https://martinroll.com/wp-content/uploads/Singapore-Airlines-%E2%80%93-An-Excellent-Iconic-Asian-Brand-Martin-Roll.jpg',slogan: "A Great Way To Fly", wlink: "https://www.singaporeair.com/en_UK/in/home#/book/bookflight")
emirates=Airline.create(name: "Emirates",image: "https://content.presspage.com/uploads/2431/1920_An-Emirates-A380-434215.jpg?10000",slogan: "Fly Emirates,Fly Better",wlink: "https://www.emirates.com/in/english/book/?gclid=CjwKCAjwk_WVBhBZEiwAUHQCmaO7OAzD8IrAmhvKoSsXWgmWdyOJncne99tzTDsrrd5WH3wr5W0WnhoC_NQQAvD_BwE&gclsrc=aw.ds")
kenya_airways=Airline.create(name:"Kenya Airways",image:"https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2022/02/K63391.jpg",slogan:"The pride of Africa",wlink: "https://www.kenya-airways.com/in/")
swiss_air=Airline.create(name:"Swiss Air",image:"https://s28477.pcdn.co/wp-content/uploads/2017/07/Swiss_A320_1-984x554.jpg",slogan:"Being SWISS means going the extra mile – always",wlink:"https://www.swiss.com/in/en/homepage")
ethiad_airways=Airline.create(name:"Ethiad Airways",image:"https://landor-prod.imgix.net/app/uploads/2015/08/27135714/Etihad-1.jpg?w=1160&h=653&f=crop&auto=format&dpr=2.625",slogan:"From Abu Dhabi to the world",wlink:"https://www.etihad.com/en-in/")



#User

max=User.create(name:"Max",email:"max@jetsetgo.com",admin:false)
bradley=User.create(name:"Bradley",email:"aviationgeek@jetsetgo.come",admin:false)
hayley=User.create(name:"Hayley",email:"hayley@jetsetgo.com",admin:false)
koshi=User.create(name:"Koshi",email:"koshi@jetsetgo.com",admin:false)
cathy=User.create(name:"Cathy",email:"cathy@jetsetgo.com",admin:false)


#Review  
Review.create(image:"https://onestep4ward.com/wp-content/uploads/2021/08/2D8511AA-C6ED-4B46-A4BF-1459904A8CE3-scaled.jpeg",date: DateTime.new(2021, 10, 31), destination:"Dubai to Paris", seat:"First Class",description:"No wordes for the luxury of Emirates.Right from food to comfort had the best flight of my life." ,likes:0,dislikes:0,airline_id: emirates.id,user_id: max.id)
Review.create(image:"https://i.pinimg.com/originals/e3/25/8c/e3258cb4503d0594a5ae9f159bd8394d.jpg",date:DateTime.new(2021, 10, 27),destination:"Zurich to Las Vegas",seat:"Economy",description:"The best coffee and chocolate I have had till date",likes:0,dislikes:0,airline_id: swiss_air.id,user_id: bradley.id )
Review.create(image:"https://worldofwanderlust.com/wp-content/uploads/2022/03/866D61D2-FFD1-4392-9596-0E4E372D18D9.jpg", date: DateTime.new(2021, 11, 1),destination:"Singapore to Tokyo",seat:"Business class",description:"If you want comforting long flights always take Singapore airlines",likes:0,dislikes:0,airline_id:singapore_airlines.id,user_id: cathy.id)
Review.create(image:"https://theluxurytraveller.com/wp-content/uploads/2017/12/LX-777-J-25-e1515797262572-1024x856.jpg",date: DateTime.new(2021, 9, 2),destination:"Interlaken to Cape  Cairo",seat:"Business",description:"Loved the swiss experience.The flight was smooth special thanks to airhostess Rose.",likes:0,dislikes:0,airline_id:swiss_air.id,user_id: max.id)
Review.create(image:"https://media-cdn.tripadvisor.com/media/photo-s/0c/44/a8/04/another-typical-hot-meal.jpg",date: DateTime.new(2021, 6, 6),destination:"Nairobi to Beijing",seat:"Economy",description:"Was on my way back from a vacay in africa.Comfortable economy seats cant wait to fly again.",likes:0,dislikes:0,airline_id: kenya_airways.id,user_id: hayley.id)
Review.create(image:"https://www.etihad.com/content/dam/eag/etihadairways/etihadcom/Global/products/onboard-cabins/economy-class/economy-seat-381x300.jpg?imwidth=384",date: DateTime.new(2021, 11, 02),destination:"Abu Dhabi to New york",seat:"Premium Economy",description:"I took a premium economy seat since this was a long flight.Slept like a cat.There were good movie options as well.",likes:0,dislikes:0,airline_id: ethiad_airways.id,user_id: cathy.id)
Review.create(image:"https://www.singaporeair.com/saar5/images/flying-withus/cabins-pre-economy-class/Premium-Economy-tile-1.jpg",date: DateTime.new(2021, 10, 27),destination:"Seoul to Milan",seat:"Business Class",description:"Was really scared as I had to complete a work assignment on flight but turned out singapore airline was the best.Good wifi service in business.",likes:0,airline_id: singapore_airlines.id,user_id: koshi.id)


#Comment

puts "Done seeding"