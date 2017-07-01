from rest_framework import viewsets,serializers,mixins
from app_models.posts import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class PostViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
