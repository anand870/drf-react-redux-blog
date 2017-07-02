from rest_framework import viewsets,serializers,mixins,filters
from django_filters.rest_framework import DjangoFilterBackend
import django_filters
from app_models.posts import Post
from app_utils.backends import CountBackend

class PostFilter(django_filters.FilterSet):
    class Meta:
        model = Post
        fields = ['author','category']

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class PostViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):
    queryset = Post.objects.filter(published=True).all()
    serializer_class = PostSerializer
    filter_class = PostFilter
    filter_backends = (DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter,CountBackend)
    search_fields = ('title',)
    ordering_fields = ('modified_at','slug')
    lookup_field = 'slug'
