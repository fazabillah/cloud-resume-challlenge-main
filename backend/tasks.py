from invoke import task
from lib.render_items import render_items


@task
def render_blog(c):
    """Render blog markdown files to JSON."""
    render_items("blog")


@task
def render_projects(c):
    """Render project markdown files to JSON."""
    render_items("projects")


@task
def render_all(c):
    """Render both blog and project markdown files to JSON."""
    render_items("blog")
    render_items("projects")
