from django.urls import path
from django.conf.urls import url, include
from rest_framework import serializers, viewsets, routers
from vitter.models import Tweet
from vitter import views
from . import settings
from django.conf.urls.static import static
from django.views.static import serve


class TweetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tweet
        fields = ('post', 'username', 'date')


class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

router = routers.DefaultRouter()
router.register(r'api', TweetViewSet)


urlpatterns = [
    path('', views.home, name="home"),
    url(r'^', include(router.urls)),
    url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
]
