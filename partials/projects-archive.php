<?php
$projects = get_posts( array(
    'post_type' => 'projecten',
    'numberposts' => 35
) );
?>
<div id="projects" class="row">
    <?php 
    foreach($projects as $project) : 
    
        $images = get_field('images', $project->ID);
    ?>    
        <div class="col-md-3 mb-5">
            <div class="project <?php echo 'project-' . $project->ID; ?>">
                <?php echo get_the_post_thumbnail($project->ID); ?>
                <div class="project-overlay">
                    <a href="javascript:void(0)" data-carousel="#project-carousel-popup-<?php echo $project->ID ?>"><?php echo $project->post_title ?></a>
                </div>
            </div>
        </div>
        <?php if( $images ) : ?> 
            <div class="carousel-popup" id="project-carousel-popup-<?php echo $project->ID ?>">
                <button class="carousel-popup-close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </button>
                <div id="project-carousel-<?php echo $project->ID; ?>" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <?php foreach($images as $key => $image) : ?>
                        <div class="carousel-item <?php echo $key === 0 ? 'active' : '' ?>">
                            <img src="<?php echo $image['sizes']['large']; ?>" class="img-fluid" alt="<?php echo $image['title']; ?>" />
                        </div>
                        <?php endforeach; ?>
                    </div>
                    <a class="carousel-control-prev" data-target="#project-carousel-<?php echo $project->ID; ?>" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" data-target="#project-carousel-<?php echo $project->ID; ?>" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        <?php endif; ?>
    <?php endforeach; ?>
</div>