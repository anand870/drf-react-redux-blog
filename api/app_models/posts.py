from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=500)
    slug = models.SlugField(max_length=100)
    content = models.TextField()
    description = models.TextField(blank=True,default="")
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    published = models.BooleanField(default=True)
    #it will be an image field but for now working with third party urls
    featured_image = models.CharField(max_length=500)
    author = models.ForeignKey("Author",on_delete=models.SET_NULL,null=True)
    category = models.ManyToManyField("Category")
    def __unicode__(self):
        return self.title


class Author(models.Model):
    slug = models.SlugField(max_length=50,primary_key=True)
    name = models.CharField(max_length=50)
    def __unicode__(self):
        return self.name


class Category(models.Model):
    slug = models.SlugField(max_length=50,primary_key=True)
    name = models.CharField(max_length=50)
    def __unicode__(self):
        return self.name

class PostImage(models.Model):
    url = models.CharField(max_length=200)
    post = models.ForeignKey(Post)
    def __unicode__(self):
        return self.url
