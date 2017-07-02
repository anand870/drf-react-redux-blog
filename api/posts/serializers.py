from rest_framework import serializers
from app_models.posts import Post,Author,Category,PostImage

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name','slug')

class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = ('url',)
class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('name','slug')

class PostDetailSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    images = PostImageSerializer(many=True,source="postimage_set")
    category = CategorySerializer(many=True)
    class Meta:
        model = Post
        fields = ('id','title','slug','content','modified_at','author','featured_image','images','category')

class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id','title','slug','description','featured_image')
