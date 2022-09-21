---
layout: home.njk
title: Welcome to bxtr.co!
---
# 👋 Welcome!

I’m Matt Baxter — this is my personal space on the internet. From time to time I have grand visions of turning this into the home of my witty, humorous, and insightful weblog that launches me into internet fame. Eventually I chuckle at the thought, think to myself, “Nah, I’m good,” and go back to sipping on my artisinal, handcrafted, pourover cup of coffee.

IRL, I enjoy spending time with my wife and our three kids. We're still trying to figure out this whole “zone defense” thing. I’m also a big fan of that Jesus guy you may have heard about. I’m always up for a good coffee _(as you might have guessed from that delicious cup I mentioned earlier)_, beer, or whiskey and I quite enjoy games of both the “video” and “board” variety. I also have a bad habit of wearing skinny jeans _(or so I'm told)_.

Professionally, I’m on the product management team at [Bestow](https://bestow.com/ "Bestow"), where we’re making life insurance more accessible for everyone.

If you're looking to get in touch, hit me up on 📷&nbsp;[Instagram](https://www.instagram.com/mbxtr "@mbxtr on Instagram"), 🐦&nbsp;[Twitter](https://www.twitter.com/mbxtr "@mbxtr on Twitter"), 💼&nbsp;[LinkedIn](http://www.linkedin.com/in/mbxtr/en), or by ✉️&nbsp;[email](mailto:matt.baxter@gmail.com).

Turns out, sometimes I surprise even myself and end up write something!

<ul>
{% for post in collections.published reversed %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a> | <em>{{ post.data.nice_date }}</em></li>
{% endfor %}
</ul>

Happy interneting! 🤓

_Matt_